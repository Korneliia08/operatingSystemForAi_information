import style from "./../card.module.scss";

function AIAlgorithms1() {
    return (
        <>
            <div className={style.container}>
                <h2>AI Algorithms </h2>
                <p>AI algorithms are the core of artificial intelligence, enabling machines to perform tasks that typically require human intelligence.
                    Below, we explore four key types of AI algorithms, providing detailed information and examples for each.</p>

                <h3>Machine Learning Algorithms</h3>
                <p>Machine learning (ML) is a subset of AI that focuses on building systems that can learn from data and improve over time. Key types of ML
                    algorithms include:</p>
                <ul>
                    <li><strong>Supervised Learning:</strong>
                        <ul>
                            <li><em>Linear Regression:</em> Used for predicting numerical values.</li>
                            <li><em>Logistic Regression:</em> Used for binary classification problems.</li>
                            <li><em>Support Vector Machines:</em> Effective for high-dimensional spaces.</li>
                            <li><em>Neural Networks:</em> Mimic the human brain for complex pattern recognition.</li>
                        </ul>
                    </li>
                    <li><strong>Unsupervised Learning:</strong>
                        <ul>
                            <li><em>K-Means Clustering:</em> Groups similar data points into clusters.</li>
                            <li><em>Principal Component Analysis (PCA):</em> Reduces the dimensionality of data.</li>
                            <li><em>Association Rules:</em> Identifies relationships between variables in large datasets.</li>
                        </ul>
                    </li>
                    <li><strong>Reinforcement Learning:</strong>
                        <ul>
                            <li><em>Q-Learning:</em> Learns the value of actions in specific states to maximize rewards.</li>
                            <li><em>Deep Q Networks (DQN):</em> Combines Q-learning with deep neural networks for complex tasks.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default AIAlgorithms1;
