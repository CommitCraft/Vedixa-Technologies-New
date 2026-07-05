import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Technologies from './pages/Technologies'
import Architecture from './pages/Architecture'
import Portfolio from './pages/Portfolio'
import Industries from './pages/Industries'
import Careers from './pages/Careers'
import Contact from './pages/Contact'

export default function App(){
  return <Routes>
    <Route element={<Layout/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/technologies" element={<Technologies/>}/>
      <Route path="/architecture" element={<Architecture/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/industries" element={<Industries/>}/>
      <Route path="/careers" element={<Careers/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Route>
    <Route path="*" element={<Navigate to="/" replace/>}/>
  </Routes>
}
