import React, {useLayoutEffect} from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import Login from './component/LogRegest/Login';
import Register from './component/LogRegest/Register';
import HomePage from './pages/HomePage';
import Curriculum from './pages/CurriculumPage';
import AboutUsPage from './pages/AboutUsPage';
import BlogPage from './pages/BlogPage';
import OurFeaturedPage from './pages/OurFeaturedPage';
import PrivacyPage from './pages/PrivacyPage';
import RefundPage from './pages/RefundPage';
import TermsPage from './pages/TermsPage';
import FAQPage from './pages/FAQPage';
import LearnUrduPage from './pages/LearnUrduPage';
import LearnArabicPage from './pages/LearnArabicPage'
import TajweedPage from './pages/TajweedPage'
import MemorizationPage from './pages/MemorizationPage'
import BookFreeTrailPage from './pages/BookFreeTrailPage'
import JoinAsTeacherPage from './pages/JoinAsTeacherPage'


export default function App() {

  const location = useLocation();
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/curriculum' element={<Curriculum/>}/>
      <Route path='/about-us' element={<AboutUsPage/>}/>
      <Route path='/blog' element={<BlogPage/>}/>
      <Route path='/our-featured' element={<OurFeaturedPage/>}/>
      <Route path='/privacy' element={<PrivacyPage/>}/>
      <Route path='/refund' element={<RefundPage/>}/>
      <Route path='/terms' element={<TermsPage/>}/>
      <Route path='/faq' element={<FAQPage/>}/>
      <Route path='/blog/learn-urdu' element={<LearnUrduPage/>}/>
      <Route path='/blog/learn-arabic' element={<LearnArabicPage/>}/>
      <Route path='/blog/tajweed' element={<TajweedPage/>}/>
      <Route path='/blog/memorization' element={<MemorizationPage/>}/>
      <Route path='/bookfreetrail' element={<BookFreeTrailPage/>}/>
      <Route path='/joinasteacher' element={<JoinAsTeacherPage/>}/>
    </Routes>
  );
}

