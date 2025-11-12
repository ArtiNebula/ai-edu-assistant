# import pytesseract
# import cv2
# from PIL import Image
# from transformers import CLIPProcessor, CLIPModel

# # Set Tesseract path
# pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

# # import os
# # import pytesseract

# # tesseract_path = os.getenv("TESSERACT_CMD", "/usr/bin/tesseract")  # default Linux path
# # pytesseract.pytesseract.tesseract_cmd = tesseract_path

# # RUN apt-get update && apt-get install -y tesseract-ocr


# # Load CLIP model
# clip_model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
# processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

# def extract_text_from_image(image_path: str) -> str:
#     image = cv2.imread(image_path)
#     gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
#     resized = cv2.resize(gray, None, fx=2, fy=2, interpolation=cv2.INTER_LINEAR)
#     thresh = cv2.adaptiveThreshold(resized, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C,
#                                    cv2.THRESH_BINARY, 31, 2)
#     denoised = cv2.medianBlur(thresh, 3)
#     pil_img = Image.fromarray(denoised)
#     text = pytesseract.image_to_string(pil_img, config='--psm 6')
#     return text.strip()

# def classify_image(image_path: str) -> str:
#     image = Image.open(image_path)
#     candidate_labels = ["Neuron Diagram", "Heart Diagram", "Plant Cell Diagram", "Physics Circuit Diagram"]
#     inputs = processor(text=candidate_labels, images=image, return_tensors="pt", padding=True)
#     outputs = clip_model(**inputs)
#     probs = outputs.logits_per_image.softmax(dim=1)
#     return candidate_labels[probs.argmax()]

# # Wrapper for compatibility
# def classify_diagram(image_path: str) -> str:
#     return classify_image(image_path)

import pytesseract
import cv2
from PIL import Image
from transformers import CLIPProcessor, CLIPModel

# Set Tesseract path (Windows)
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

# Load CLIP model for image classification
clip_model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

# OCR Function
def extract_text_from_image(image_path: str) -> str:
    image = cv2.imread(image_path)
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    resized = cv2.resize(gray, None, fx=2, fy=2, interpolation=cv2.INTER_LINEAR)
    thresh = cv2.adaptiveThreshold(resized, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C,
                                   cv2.THRESH_BINARY, 31, 2)
    denoised = cv2.medianBlur(thresh, 3)
    pil_img = Image.fromarray(denoised)
    text = pytesseract.image_to_string(pil_img, config='--psm 6')
    return text.strip()

# Image Classification Function
def classify_image(image_path: str) -> str:
    image = Image.open(image_path)
    candidate_labels = ["Neuron Diagram", "Heart Diagram", "Plant Cell Diagram", "Physics Circuit Diagram"]
    inputs = processor(text=candidate_labels, images=image, return_tensors="pt", padding=True)
    outputs = clip_model(**inputs)
    probs = outputs.logits_per_image.softmax(dim=1)
    return candidate_labels[probs.argmax()]

# Wrapper for FastAPI compatibility
def classify_diagram(image_path: str) -> str:
    return classify_image(image_path)