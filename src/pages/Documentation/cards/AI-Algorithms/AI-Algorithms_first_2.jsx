import style from "./../card.module.scss";

function AIAlgorithms2() {
    return (
        <>
            <div className={style.container}>
                <h2>AI Algorithms </h2>
                <h3>Natural Language Processing (NLP) Algorithms</h3>
                <p>Natural Language Processing (NLP) involves the interaction between computers and human language. Common NLP algorithms include:</p>
                <ul>
                    <li><strong>Tokenization:</strong> Breaking down text into smaller components (tokens).</li>
                    <li><strong>Part-of-Speech Tagging:</strong> Identifying parts of speech (nouns, verbs, etc.) in text.</li>
                    <li><strong>Named Entity Recognition (NER):</strong> Detecting and classifying named entities (names, dates, etc.) in text.</li>
                    <li><strong>Sentiment Analysis:</strong> Determining the sentiment expressed in a text (positive, negative, neutral).</li>
                    <li><strong>Machine Translation:</strong> Translating text from one language to another using algorithms like Google Translate.</li>
                </ul>

                <h3>Computer Vision Algorithms</h3>
                <p>Computer vision enables machines to interpret and make decisions based on visual input. Important computer vision algorithms
                    include:</p>
                <ul>
                    <li><strong>Image Classification:</strong> Categorizing images into predefined classes using models like Convolutional Neural Networks
                        (CNNs).
                    </li>
                    <li><strong>Object Detection:</strong> Identifying and locating objects within images using algorithms such as YOLO (You Only Look
                        Once) and R-CNN (Region-based Convolutional Neural Networks).
                    </li>
                    <li><strong>Image Segmentation:</strong> Dividing an image into segments to simplify analysis using methods like U-Net.</li>
                    <li><strong>Facial Recognition:</strong> Identifying or verifying a person from an image using deep learning techniques.</li>
                    <li><strong>Optical Character Recognition (OCR):</strong> Converting different types of documents into editable and searchable data.
                    </li>
                </ul>
            </div>
        </>
    );
}

export default AIAlgorithms2;
