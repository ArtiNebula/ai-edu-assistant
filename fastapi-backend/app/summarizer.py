from transformers import pipeline

summarizer = pipeline("summarization", model="facebook/bart-large-cnn")

# summarizer = pipeline(
#     "summarization",
#     model="./models/t5-finetuned/",       # Local path
#     # tokenizer=".t5-finetuned/"    # Tokenizer path
#     # local_files_only=True 
# )


def summarize_text(text: str) -> str:
    summary = summarizer(text, max_length=100, min_length=30, do_sample=False)
    return summary[0]['summary_text']

# from transformers import AutoTokenizer, AutoModelForSeq2SeqLM, pipeline

# model_path = "./t5-finetuned", 

# tokenizer = AutoTokenizer.from_pretrained(model_path, local_files_only=True)
# model = AutoModelForSeq2SeqLM.from_pretrained(model_path, local_files_only=True)

# summarizer = pipeline("summarization", model=model, tokenizer=tokenizer)

# def summarize_text(text: str) -> str:
#     summary = summarizer(text, max_length=100, min_length=30, do_sample=False)
#     return summary[0]['summary_text']
#     {
#     "summary": "Your long lecture notes or paragraph. Use this information to help students understand today's featured news stories. Use the weekly Newsquiz to test your knowledge of stories you saw on CNN.com."
# }
