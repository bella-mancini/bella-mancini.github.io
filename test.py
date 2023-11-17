# import pandas as pd
# import jsonlines
# import openai

# # Set your OpenAI API key here
# openai.api_key = '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'

# def excel_to_jsonl(excel_file_path, jsonl_file_path):
#     df = pd.read_excel(excel_file_path, engine='openpyxl')
#     with jsonlines.open(jsonl_file_path, mode='w') as writer:
#         for _, row in df.iterrows():
#             json_data = row.to_dict()
#             writer.write(json_data)

# def categorize_data(data_to_categorize):
#     prompt = "Categorize the following data:\n" + data_to_categorize
#     response = openai.Completion.create(
#         engine="text-davinci-003",
#         prompt=prompt,
#         max_tokens=100
#     )
#     return response['choices'][0]['text'].strip()

# if __name__ == "__main__":
#     input_excel_file = 'SmarterX_Interns_Sample_Data_Nov2023.xlsx'
#     output_jsonl_file = 'output_Sample_Data.jsonl'
#     excel_to_jsonl(input_excel_file, output_jsonl_file)

#     # Example usage
#     data_to_categorize = "Your data goes here..."
#     result = categorize_data(data_to_categorize)
#     print("Categorized result:", result)

# import openai

# # Set your OpenAI API key
# openai.api_key = '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'

# # Craft a prompt for classification
# prompt = f"Categorize the product into distinct categories based on the given data attributes:\n\nItem UPC: {product_upc}\nProduct Name: {product_name}\nMarketing Copy: {MARKETING_COPY}\nItem Brand Name: {item_brand_name}\nProduct Image URL: {product_image_url}"

# # Replace {item_upc}, {product_name}, {marketing_copy}, {brand_name}, and {image_url} with actual product details

# # Use OpenAI GPT-3 to perform classification
# response = openai.Completion.create(
#     engine="text-davinci-003",
#     prompt=prompt,
#     max_tokens=100
# )

# # Extract the generated category from the response
# predicted_category = response['choices'][0]['text'].strip()
# print("Predicted Category:", predicted_category)

# Load data from JSON file

import openai
import jsonlines

# Set your OpenAI API key
openai.api_key = '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'


# Initialize output_data as an empty list
output_data = []

# Read data from JSONL file
with jsonlines.open('Data_json_all.jsonl', 'r') as reader:
    for product_data in reader:
        # Extract data from JSON
        product_upc = product_data['product_upc']
        product_name = product_data['product_name']
        MARKETING_COPY = product_data['MARKETING_COPY']
        item_brand_name = product_data['item_brand_name']
        product_image_url = product_data['product_image_url']

        # Craft a prompt for classification
        prompt = f"Categorize each item into 1 general category based on the given data attributes:\n\nItem UPC: {product_upc}\nProduct Name: {product_name}\nMarketing Copy: {MARKETING_COPY}\nItem Brand Name: {item_brand_name}\nProduct Image URL: {product_image_url}"

        # Use OpenAI GPT-3 to perform classification
        response = openai.Completion.create(
            engine="text-davinci-003",
            prompt=prompt,
            max_tokens=20
        )

        # Extract the generated category from the response
        predicted_category = response['choices'][0]['text'].strip()
        print(f"Product UPC: {product_upc}, Predicted Category: {predicted_category}")

        # Add the predicted category to the product_data dictionary
        product_data['predicted_category'] = predicted_category

        # Append the updated product_data to the output_data list
        output_data.append(product_data)

# Write the updated data to a new JSONL file
with jsonlines.open('Output_Data_json_all.jsonl', 'w') as writer:
    writer.write_all(output_data)