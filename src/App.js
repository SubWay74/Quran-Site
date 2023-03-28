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
import LearnArabicPage from './pages/LearnArabicPage';
import TajweedPage from './pages/TajweedPage';
import LearnAdhan from './component/LearnComponents/LearnAdhan';
import MemorizationPage from './pages/MemorizationPage';
import BookFreeTrailPage from './pages/BookFreeTrailPage';
import JoinAsTeacherPage from './pages/JoinAsTeacherPage';
import Profile from './component/ProfileComponents/Profile';
import Confirm from './pages/Confirm';
// POSTS
import BenefitsOfMemorizingQuran from './component/BlogComponents/Posts/BenefitsOfMemorizingQuran';
import BenefitsOfSurahArRahman from './component/BlogComponents/Posts/BenefitsOfSurahArRahman';
import BestTips from './component/BlogComponents/Posts/BestTips';
import HowToMemorize from './component/BlogComponents/Posts/HowToMemorize';
import OARvsTAR from './component/BlogComponents/Posts/OARvsTAR';
import TipsTajweed from './component/BlogComponents/Posts/TipsTajweed';
import WhyAdhan from './component/BlogComponents/Posts/WhyAdhan';
import WhyAr from './component/BlogComponents/Posts/WhyAr';
import WhyARArabicWave from './component/BlogComponents/Posts/WhyARArabicWave';
import WhyMemorizeQuran from './component/BlogComponents/Posts/WhyAr';



export default function App() {

  const location = useLocation();
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route exact path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/' element={<HomePage/>}/>
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
      <Route path='/blog/adhan' element={<LearnAdhan/>}/>
      <Route path='/blog/memorization' element={<MemorizationPage/>}/>
      <Route path='/bookfreetrail' element={<BookFreeTrailPage/>}/>
      <Route path='/joinasteacher' element={<JoinAsTeacherPage/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/BenefitsOfMemorizingQuran' element={<BenefitsOfMemorizingQuran/>}/>
      <Route exact path='/BenefitsOfSurahArRahman' element={<BenefitsOfSurahArRahman/>}/>
      <Route exact path='/BestTips' element={<BestTips/>}/>
      <Route exact path='/HowToMemorize' element={<HowToMemorize/>}/>
      <Route exact path='/OARvsTAR' element={<OARvsTAR/>}/>
      <Route exact path='/TipsTajweed' element={<TipsTajweed/>}/>
      <Route exact path='/WhyAdhan' element={<WhyAdhan/>}/>
      <Route exact path='/WhyAr' element={<WhyAr/>}/>
      <Route exact path='/WhyARArabicWave' element={<WhyARArabicWave/>}/>
      <Route exact path='/WhyMemorizeQuran' element={<WhyMemorizeQuran/>}/>
      <Route path="/confirmation/:id" element={<Confirm/>} />
    </Routes>
  );
}

