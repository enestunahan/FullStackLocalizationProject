import Data from "./Components/Data/Data";
import Navbar from "./Components/Navbar/Navbar"
import './i18n'

function App() {


  const seedData = [
    { id: 1, nameen: 'Item 1', nametr: 'Öğe 1', descen: 'Description 1', desctr: 'Açıklama 1' },
    { id: 2, nameen: 'Item 2', nametr: 'Öğe 2', descen: 'Description 2', desctr: 'Açıklama 2' },
    { id: 3, nameen: 'Item 3', nametr: 'Öğe 3', descen: 'Description 3', desctr: 'Açıklama 3' },
    { id: 4, nameen: 'Item 4', nametr: 'Öğe 4', descen: 'Description 4', desctr: 'Açıklama 4' },
    { id: 5, nameen: 'Item 5', nametr: 'Öğe 5', descen: 'Description 5', desctr: 'Açıklama 5' },
    { id: 6, nameen: 'Item 6', nametr: 'Öğe 6', descen: 'Description 6', desctr: 'Açıklama 6' },
    { id: 7, nameen: 'Item 7', nametr: 'Öğe 7', descen: 'Description 7', desctr: 'Açıklama 7' },
    { id: 8, nameen: 'Item 8', nametr: 'Öğe 8', descen: 'Description 8', desctr: 'Açıklama 8' },
    { id: 9, nameen: 'Item 9', nametr: 'Öğe 9', descen: 'Description 9', desctr: 'Açıklama 9' },
    { id: 10, nameen: 'Item 10', nametr: 'Öğe 10', descen: 'Description 10', desctr: 'Açıklama 10' },
  ];

  return (
    <>
     <Navbar/>
     <Data data={seedData} />
    </>
  )
}

export default App
