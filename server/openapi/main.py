"""
    Usage: python main.py <purpose> <data>
    Options:
        purpose:
            extract -> requires file path relative to this module
            evaluate -> requires file path relative to this module
            enhance -> requires file path relative to this module
            challenge -> requires base64 encoded long string

    Examples:
        python main.py extract resume.pdf
        python main.py evaluate resume.pdf
        python main.py enhance resume.pdf
        python main.py challenge aGVsbG8gd29ybGQ=
"""

import dotenv
import openai
from PyPDF2 import PdfReader
import sys
from pathlib import Path
import base64


config = dotenv.dotenv_values(".env")

purpose = sys.argv[1]
sample_data_file = sys.argv[2] # File path relative to this project


openai.api_key = config['OPENAI_API_KEY']

q_extract = "can you extract the uploaded resume and return the response as JSON?"
q_evaluate = "can you evaluate the strengths and weaknesses of the resume and return the response as JSON? "
q_enhance = "can you improve the resume and return the response as JSON?"
q_challenge = "can you generate a challenging questionnaire based on the job opening below and return the response as JSON?"
sample = ""
file_path = Path(sample_data_file)

# check if file is valid
if file_path.is_file() and file_path.exists():
    pdf_data = PdfReader(sample_data_file)

    for page in pdf_data.pages:
        sample += page.extract_text()

else:
    sample = base64.b64decode(sample_data_file.encode("ascii")).decode('ascii')

def chatGPTAsk(question, data):
    engine = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {
                "role": "user",
                "content": """
                    {0}
                    {1}
                """.format(question,data)
            }
        ]
    )

    return engine.choices[0].message.content.strip()


if purpose == "extract":
    print(chatGPTAsk(q_extract, sample))

if purpose == "evaluate":
    print(chatGPTAsk(q_evaluate, sample))

if purpose == "enhance":
    print(chatGPTAsk(q_enhance, sample))

if purpose == "challenge":
    print(chatGPTAsk(q_challenge, sample))