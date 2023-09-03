### Overview
    This module will provide chatgpt essential commands.

### Installation
Install python on your machine. Get it from

[python.org](https://www.python.org)

Run ```python -m pip install -r requirements.txt```

Then you will be able to run this module by executing the following command:

```python main.py extract resume.pdf```

Setup Requirements:

```file .env```

Contents:

```markdown
OPENAI_API_KEY=<API_KEY_HERE>
```

### Usage Manual
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