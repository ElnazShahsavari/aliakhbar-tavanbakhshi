import CardInfo from './CardInfo';

// باکس برای نشان دادن محصولات ، پویش ها و غیره
const BoxInfo = ({ items, type , miniText , cardClass }) => {
  return (
    <div className='row row-cols-2 row-cols-lg-4 d-flex align-items-stretch'>
      {items.slice(0, 2).map((item, index) => (
        <div className='col px-1 px-md-2' key={index}>
          <CardInfo items={item} type={type} miniText={miniText} cardClass={cardClass}/>
        </div>
      ))}
      {items.slice(2, 4).map((item, index) => (
        <div className='col d-none d-lg-block' key={index}>
          <CardInfo items={item} type={type} miniText={miniText} cardClass={cardClass}/>
        </div>
      ))}
    </div>
  );
};

export default BoxInfo;
