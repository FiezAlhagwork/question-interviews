const PageHead = () => {
  return (
    <div className=" bg-primary-100 h-72 w-full flex justify-center items-center text-center">
      <div className="section_container">
        <h1 className="text-30-extrabold">أسئلة مقابلات عمل </h1>
        <p className="text-20-medium leading-8 max-md:text-14-normal">
          {" "}
          مجموعة من أهم الأسئلة الشائعة في مقابلات العمل، خاصة لمجال الـ
          FrontEnd
        </p>
      </div>
    </div>
  );
};

export default PageHead;
