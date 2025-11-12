from transformers import pipeline

generator = pipeline("text-generation", model="gpt2")

def generate_quiz(text: str) -> str:
    prompt = f"Generate 3 multiple choice questions from the following content:\n{text}\n"
    result = generator(prompt, max_new_tokens=200, num_return_sequences=1)
    return result[0]['generated_text']