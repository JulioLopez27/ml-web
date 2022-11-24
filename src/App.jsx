import { Select } from './Select'

function App() {

  return (
    <>
      <header className='text-center p-4'>
        <div ><h1>Formación seleccionada: 4-3-3</h1></div>
      </header>

      <main >

        <form className='text-center' >

          <section id="titulares">

            <h2 className='p-2 font-bold' >Ingrese los nombres de los 11 titulares y sus posiciones</h2>
            <div className='text-center my-2 '>
              <input type="text" name="titular1" className='border-gray-400 border mx-2' />
              <Select />
            </div>
            <div className='text-center my-2 '>
              <input type="text" name="titular2" className='border-gray-400 border mx-2' />
              <Select />
            </div>
            <div className='text-center my-2 '>
              <input type="text" name="titular3" className='border-gray-400 border mx-2' />
              <Select />
            </div>
            <div className='text-center my-2 '>
              <input type="text" name="titular4" className='border-gray-400 border mx-2' />
              <Select />
            </div>
            <div className='text-center my-2 '>
              <input type="text" name="titular5" className='border-gray-400 border mx-2' />
              <Select />
            </div>
            <div className='text-center my-2 '>
              <input type="text" name="titular6" className='border-gray-400 border mx-2' />
              <Select />
            </div>
            <div className='text-center my-2 '>
              <input type="text" name="titular7" className='border-gray-400 border mx-2' />
              <Select />
            </div>
            <div className='text-center my-2 '>
              <input type="text" name="titular8" className='border-gray-400 border mx-2' />
              <Select />
            </div>
            <div className='text-center my-2 '>
              <input type="text" name="titular9" className='border-gray-400 border mx-2' />
              <Select />
            </div>
            <div className='text-center my-2 '>
              <input type="text" name="titular10" className='border-gray-400 border mx-2' />
              <Select />
            </div>
            <div className='text-center my-2 '>
              <input type="text" name="titular11" className='border-gray-400 border mx-2' />
              <Select />
            </div>

          </section>


          <section id="suplentes" className=''>
            <h2 className='p-2 font-bold'>Ingrese los nombres de los 7 suplentes y sus posiciones</h2>
            <div className='text-center my-2'>
              <input type="text" name="suplente1" className='border-gray-400 border mx-2' />
              <Select />
            </div>
            <div className='text-center my-2 '>
              <input type="text" name="suplente2" className='border-gray-400 border mx-2' />
              <Select />
            </div>
            <div className='text-center my-2 '>
              <input type="text" name="suplente3" className='border-gray-400 border mx-2' />
              <Select />
            </div>
            <div className='text-center my-2 '>
              <input type="text" name="suplente4" className='border-gray-400 border mx-2' />
              <Select />
            </div>
            <div className='text-center my-2 '>
              <input type="text" name="suplente5" className='border-gray-400 border mx-2' />
              <Select />
            </div>
            <div className='text-center my-2 '>
              <input type="text" name="suplente6" className='border-gray-400 border mx-2' />
              <Select />
            </div>
            <div className='text-center my-2 '>
              <input type="text" name="suplente7" className='border-gray-400 border mx-2' />
              <Select />
            </div>
          </section>



          <section id="ct" className='p-4 '>
            <h2 className='font-bold my-2'>Cuerpo Técnico:</h2>
            <div className='flex justify-around'>
              <div className='text-center my-2 '>
                <label htmlFor="dt">Director técnico:
                  <input type="text" name="dt" id="dt" className='border-gray-400 border mx-2' />
                </label>
              </div>
              <div className='text-center my-2 '>
                <label htmlFor="asist">Asistente técnico:
                  <input type="text" name="asist" id="asist" className='border-gray-400 border mx-2' />
                </label>
              </div>

              <div className='text-center my-2 '>
                <label htmlFor="med">Médico:
                  <input type="text" name="med" id="med" className='border-gray-400 border mx-2' />
                </label>
              </div>
            </div>
          </section>


          <div className=' flex justify-center p-4'>
            <button type='submit' className='cursor-pointer border-4 block '>
              Submit
            </button>
          </div>


        </form>

      </main>
    </>
  )
}

export default App
