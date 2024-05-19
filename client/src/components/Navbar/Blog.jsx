import { Modal } from "react-bootstrap";
import { ALL_MESSAGE } from "../../ulti/queries";

import { useQuery } from "@apollo/client";
import BlogCard from "./BlogCard";

const blogData = [
    {
      name: 'How to Fix a Slow-Loading Website',
      date: '04-07-2024',
      text: 'This blog addresses common issues that cause outdated websites to load slowly and offers solutions to improve performance.',
      url: 'https://medium.com/@nghiemxthai/how-to-fix-a-slow-loading-website-5605879a3c7c'
    },
    {
      name: 'How I Would Explain ECMAScript 6 to a Fifth-Grader',
      date: '10-23-2023',
      text: 'This blog simplifies the concepts of ECMAScript 6, making it easier for beginners to understand.',
      url: 'https://medium.com/@nghiemxthai/how-i-would-explain-ecmascript-6-to-a-fifth-grader-d20d001cdce8'
    },
    {
      name: 'How I Started Using Bulma CSS Framework',
      date: '10-17-2023',
      text: 'This blog details my learning journey with Bulma, a popular CSS framework, and how I integrated it into my projects.',
      url: 'https://medium.com/@nghiemxthai/how-i-started-using-bulma-css-framework-a81a40afbc96'
    }
  ];
const BlogContainer = ({ open, close }) => {
  const { data } = useQuery(ALL_MESSAGE, {
    variables: {
      username: "admin",
    },
  });
  let messages = [];

  if (data) {
    messages = data?.user?.messages;
    
  }

  return (
    <Modal
      show={open}
      onHide={close}
      size="xl"
      className="inbox-modal "
      
    >
      <div id='modal-body' style={{borderRadius:30}}>
      <Modal.Header id='inbox-header'closeButton>
        <Modal.Title id="modal-title"> My Blogs</Modal.Title>
      </Modal.Header>
      
          <Modal.Body >
           

           <div className="row  ">
            {blogData.map((message) => (
                    
                  <div key={message.name} className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4  d-flex  animate__animated animate__fadeIn">
                    <BlogCard
                 name={message.name}
                 text={message.text}
                 date={message.date}
                 url={message.url}
             
                 
                
                  ></BlogCard>
                  </div>
            ))}
             </div>
          </Modal.Body>
        </div>
    </Modal>
  );
};

export default BlogContainer;
