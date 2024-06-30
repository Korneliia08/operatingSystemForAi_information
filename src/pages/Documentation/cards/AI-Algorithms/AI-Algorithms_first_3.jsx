import style from "./../card.module.scss";

function AIAlgorithms3() {
    return (
        <>
            <div className={style.container}>
                <h2>AI Algorithms </h2>
                <h3>Deep Learning Algorithms</h3>
                <p>Deep learning, a subset of machine learning, uses neural networks with many layers. Prominent deep learning algorithms include:</p>
                <ul>
                    <li><strong>Feedforward Neural Networks:</strong> Simple neural networks where connections do not form cycles.</li>
                    <li><strong>Convolutional Neural Networks (CNNs):</strong> Specialized for processing grid-like data such as images.</li>
                    <li><strong>Recurrent Neural Networks (RNNs):</strong> Suitable for sequential data, including language modeling and time series
                        prediction.
                    </li>
                    <li><strong>Long Short-Term Memory (LSTM):</strong> A type of RNN capable of learning long-term dependencies.</li>
                    <li><strong>Generative Adversarial Networks (GANs):</strong> Two networks (generator and discriminator) compete, resulting in
                        high-quality data generation.
                    </li>
                </ul>

                <h3>Comparison of Key AI Algorithms</h3>
                <table>
                    <thead>
                    <tr>
                        <th>Algorithm Type</th>
                        <th>Main Purpose</th>
                        <th>Common Techniques</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Machine Learning</td>
                        <td>Learning from data to make predictions</td>
                        <td>Linear Regression, SVM, Neural Networks</td>
                    </tr>
                    <tr>
                        <td>Natural Language Processing</td>
                        <td>Understanding and generating human language</td>
                        <td>Tokenization, Sentiment Analysis, Machine Translation</td>
                    </tr>
                    <tr>
                        <td>Computer Vision</td>
                        <td>Interpreting and analyzing visual data</td>
                        <td>CNNs, Object Detection, OCR</td>
                    </tr>
                    <tr>
                        <td>Deep Learning</td>
                        <td>Learning hierarchical representations</td>
                        <td>CNNs, RNNs, GANs</td>
                    </tr>
                    </tbody>
                </table>

                <p>AI algorithms are fundamental in creating intelligent systems capable of performing complex tasks across various domains. Understanding
                    these algorithms is crucial for anyone looking to delve into the world of artificial intelligence.</p>

            </div>
        </>
    );
}

export default AIAlgorithms3;
