import os 
from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from transformers import pipeline
from pydantic import BaseModel
from .summarizer import summarize_text
from .qa import answer_question
from .ocr import extract_text_from_image
import shutil
from .quiz import generate_quiz
from flask import Flask, request, jsonify
from flask_cors import CORS

from app.diagram_classifier import extract_text_from_image, classify_diagram

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Or specify your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class SummarizeRequest(BaseModel):
    text: str

class QAInput(BaseModel):
    context: str
    question: str


class QuizInput(BaseModel):
    text: str



@app.post("/summarize")
def summarize(input: SummarizeRequest):
    result = summarize_text(input.text)  # Calls function from summarizer.py
    return {"summary": result}


@app.post("/qa")
def qa(input: QAInput):
    answer = answer_question(input.context, input.question)
    return {"answer": answer}


import asyncio

@app.post("/ocr")
async def ocr(file: UploadFile = File(...)):
    file_location = f"temp_{file.filename}"
    with open(file_location, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    loop = asyncio.get_event_loop()
    extracted_text = await loop.run_in_executor(None, extract_text_from_image, file_location)
    os.remove(file_location)

    return {"extracted_text": extracted_text}



    
@app.post("/quiz")
def quiz(input: QuizInput):
    questions = generate_quiz(input.text)
    return {"quiz": questions}

    




@app.post("/diagram")
async def diagram(file: UploadFile = File(...)):
    file_location = f"temp_{file.filename}"
    with open(file_location, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    extracted_text = extract_text_from_image(file_location)
    label = classify_diagram(file_location)

    os.remove(file_location)

    return {
        "predicted_label": label,
        "extracted_text": extracted_text
    }
