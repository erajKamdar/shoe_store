import React from 'react';
import Layout from '../components/Layout';
import { GitHubIcon} from '../components/index';

const Contact = () => {
    
    return ( 
        <Layout title="Contact" description="This is the Contact page" >
            <div className="text-center mt-5 contact" style={{ marginBottom:"29%"}}>
                <h1 style={{color: "grey"}} >Contact Query</h1>
                <a className="btn btn-primary" href="https://github.com/naveedaa/shoes-store-app">
                    <GitHubIcon width={"18px"}/> 
                        <span className="ml-2 mr-4">
                            Visit Repo
                        </span>
                </a>
            </div>
        </Layout>
     );
}
 
export default Contact;