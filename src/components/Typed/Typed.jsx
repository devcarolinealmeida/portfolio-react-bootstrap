import { useTypewriter, Cursor } from 'react-simple-typewriter'
import ArrowScroll from '../ArrowScroll/ArrowScroll';

const Typed = () => {
  const [text] = useTypewriter({
    words: ['caroline', 'dev', 'front-end', 'freelance'],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true,
  })

  return (
    <div className='typedSection container'>
        <div className='row align-items-center' style={{ minHeight:'95vh'}}>
            <h4 class="fs-h1 text-center">    
                <span class="">I'm &#123; </span>
                <span className='txt-primary'>{text}</span>
                <span class=""> &#125;</span>
                <Cursor cursorColor='#9D95FF' />
            </h4>
          <ArrowScroll/>
        </div>
    </div>
  )
}

export default Typed;