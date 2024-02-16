import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Typed = () => {
  const [text] = useTypewriter({
    words: ['caroline', 'dev', 'front-end', 'freelance'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
  })

  return (
    <div className='typedSection container'>
        <div className='row min-vh-100 align-items-center'>
            <h4 class="fs-1 text-center">    
                <span class="">I'm &#123;</span>
                <span>{text}&#125;</span>
                <Cursor cursorColor='#9D95FF' />
            </h4>
        </div>
        
    </div>
  )
}

export default Typed;