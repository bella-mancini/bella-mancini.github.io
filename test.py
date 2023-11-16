import pandas as pd
import jsonlines
import openai

# Set your OpenAI API key here
openai.api_key = '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'

def excel_to_jsonl(excel_file_path, jsonl_file_path):
    df = pd.read_excel(excel_file_path, engine='openpyxl')
    with jsonlines.open(jsonl_file_path, mode='w') as writer:
        for _, row in df.iterrows():
            json_data = row.to_dict()
            writer.write(json_data)

def categorize_data(data_to_categorize):
    prompt = "Categorize the following data:\n" + data_to_categorize
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        max_tokens=100
    )
    return response['choices'][0]['text'].strip()

if __name__ == "__main__":
    input_excel_file = 'SmarterX_Interns_Sample_Data_Nov2023.xlsx'
    output_jsonl_file = 'output_Sample_Data.jsonl'
    excel_to_jsonl(input_excel_file, output_jsonl_file)

    # Example usage
    data_to_categorize = "Your data goes here..."
    result = categorize_data(data_to_categorize)
    print("Categorized result:", result)