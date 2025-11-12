from transformers import pipeline


qa_pipeline = pipeline("question-answering", model="deepset/roberta-base-squad2")



def answer_question(context: str, question: str) -> str:
    try:
        result = qa_pipeline(question=question, context=context)
        return result['answer']
    except Exception as e:
        return f"Error: {str(e)}"