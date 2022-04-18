import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-5 p-5'>
            <h3>Q1: Difference between authorization and authentication?</h3>
            <p>Answer:The process of verifying and confirming employees ID and passwords in an organization is called authentication, but determining which employee has access to which floor is called authorization</p>
            <hr />
            <h3>Q2: Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p>Answer:# Firebase Analytics gives extra application usage information and analytics capabilities. Real-time sync makes it easy for users to access their data from any device, whether it's on the web the real-time database also allows users to collaborate with each other. <br />
            # It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitterand more.
            </p>
            <hr />
            <h3>Q3: What other services does firebase provide other than authentication?</h3>
            <p>Answer: Firebase not only provide authentication but also provide Cloud Firestore,Cloud Functions,Hosting,Cloud Storage,Google Analytics,Predictions,Cloud Messaging,Dynamic Links,Remote Config.
                </p>
        </div>
    );
};

export default Blogs;