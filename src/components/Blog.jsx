import React from 'react';
import { Button, Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container>
            <h2>Question Answer</h2>
            <div>
                <h4>What is the differences between uncontrolled and controlled components?</h4>
                <p>An uncontrolled component manages its own state internally. This means that the component stores its state in its own internal state, and the component updates its state without any external control or management.On the other hand a controlled component is a component that is controlled by its parent component. This means that the parent component manages the state of the child component and passes it down through props. The child component is not responsible for managing its own state.</p>
            </div>
            <div>
                <h4>How to validate React props using PropTypes?</h4>
                <p>React provides a way to validate the props of a component using PropTypes. PropTypes is a separate package that needs to be installed separately. To use PropTypes, we need to import it from the prop-types package.Here are some of the available PropTypes types:
                    <li>array: Validate that the prop is an array</li>
                    <li>bool: Validate that the prop is a boolean</li>
                    <li>func: Validate that the prop is a function</li>
                    <li>number: Validate that the prop is a number</li>
                    <li>object: Validate that the prop is an object</li>
                </p>
            </div>
            <div>
                <h4>Tell us the difference between nodejs and express js</h4>
                <p>Difference between nodejs and express js:
                    <li>Node.js is a runtime environment that allows us to run JavaScript code outside of a web browser.Node.js is known for its ability to handle large volumes of requests in a highly scalable and performant way. With Node.js, we can build back-end applications, web services, and APIs.</li>
                    <li>Express.js is a web framework for Node.js. It provides a set of features and tools to make it easier to build web applications and APIs. Express.js provides a routing system that allows us to define endpoints for our applications and handle HTTP requests and responses.</li>
                </p>
            </div>
            <div>
                <h4>What is a custom hook, and why will you create a custom hook?</h4>
                <p>
                To enable a specific behavior or logic that may be shared between components, a custom hook in React is a JavaScript function that begins with the use keyword and uses built-in hooks or other custom hooks. The functionality that would usually need a lot of code duplication across components can be wrapped and reused via custom hooks.The reason we create custom hook:
                <li>Simplification: Custom hooks can simplify complex component code by providing a clean and easy-to-use interface for common functionality.</li>
                <li>Organization: Custom hooks can help us organize our code and separate concerns by breaking up complex functionality into smaller, more manageable pieces.</li>
                </p>
            </div>

           <div className='text-center mb-3'>
           <Button className='btn-danger p-2'>Download Pdf</Button>
           </div>
        </Container>
    );
};

export default Blog;