import burpSuiteImage from './images/burpsuite.jpg'

import BlogCard from './utilities/BlogCard';
const Blogs = () => {
  return (
    <div className='flex flex-wrap justify-center lg:justify-start gap-x-6 mt-4'>
      
      <BlogCard img={burpSuiteImage} title="How to Use Burp Suite for scanning Websites"></BlogCard>
      <BlogCard img={burpSuiteImage} title="How to Use Burp Suite for scanning Websites"></BlogCard>
      <BlogCard img={burpSuiteImage} title="How to Use Burp Suite for scanning Websites"></BlogCard>
      <BlogCard img={burpSuiteImage} title="How to Use Burp Suite for scanning Websites"></BlogCard>

    </div>
  );
};
export default Blogs;
