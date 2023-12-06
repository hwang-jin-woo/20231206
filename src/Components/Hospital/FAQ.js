import styled from "styled-components"
import "./css/faq.css";
import { Link } from "react-router-dom"


const Container=styled.div`
  width: calc(100vw-10px);
  background-color:e5989b ;
`
const Footer=styled.div`
display: flex;
`

export function FAQ(){


  return<>
      <Container>    
      <main className="main">
            <section >
            </section>
            
        </main> 
        <Footer>
    <ul>
        <li><Link to='https://cocoder.tistory.com' target='_blank'>Blog</Link> </li>
        <li><Link to='https://github.com/hwang-jin-woo/' target='_blank'>Github</Link></li>
    </ul>
    <p>
        <span>저자 : 황진우</span><br/>
        <span>이메일 : hjinu91@naver.com</span><br/>
        <span>Copyright 2023. copy. All Rights Reserved.</span>
    </p>
</Footer>     
    </Container>  
  </>
}