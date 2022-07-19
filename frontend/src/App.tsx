function App() {
  return(
    <div class="container">
        <div class="navigation">
            <ul>
                <a id="home" href="http://www.sashatran.com/" class="active" target="_blank"> Home</a>
                <a id="sobre" href="https://codepen.io/sashatran/" target="_blank"> Sobre</a>
                <a id="git" href="https://instagram.com/sasha.codes/" target="_blank">Git</a>
                <a id="linkedin" href="https://twitter.com/sa_sha26" target="_blank">Linkedin</a>
                <div class="theme-switch">
                    <label>Light</label>
                    <div class="switch"></div>
                </div>
            </ul>
        </div>
        <footer> Desenvolvido por Matheus A Silva</footer>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
    <script src="./../script.js"></script>
    </div>
   
  )
}

export default App
