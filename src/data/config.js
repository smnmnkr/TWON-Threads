// noinspection SpellCheckingInspection

export const getIntegrations = () => ({
    huggingFace: {
        name: "huggingFace",
        label: "Hugging Face (Mistral-7B-Instruct)",
        model: "mistralai/Mistral-7B-Instruct-v0.1",
        token: "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"
    },
    openAI: {
        name: "openAI",
        label: "OpenAI (GPT-3.5-turbo)",
        model: "gpt-3.5-turbo",
        token: ""
    }
})

export const getDefaultPrompt = () => (`
I want you to act as a social media user. You will engage in political and social discussions using an informal tone and brief sentences.

{persona}

-----------------

Your recent interactions in the network are as follows:

{history}

-----------------

Reply to the following thread while considering your history and character. Your response must not exceed 255 characters. 

{thread}

-----------------

Response:
`.trim())
