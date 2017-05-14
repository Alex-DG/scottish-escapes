/**
 * Grid generator - with n item(s)/row
 * @param { Array } arr - data array
 * @param { Number } n - item number/row
 **/
 const renderGrid = (arr, n) => {
   if (arr) {

     let thumbnails = arr.map( (item, index) => {
       //return <Thumbnail key={ index } url={ item.thumbnail } />;
     });

     let row = [];
     let grid = [];

     thumbnails.map( (item, index) => {
       console.log(item);
       index++;
       row.push(<td style={ {padding: '20px'} } >{ item }</td>);

       if (index % 3 === 0) {
         grid.push(<tr key={ index }>{ row }</tr>);
         row = [];
         index = 1;
       } else if (index === thumbnails.length) {
         grid.push(<div key={ index } className="row align-items-center">{ row }</div>);
       }
     });

     return (
       <div>{ grid }</div>
     );
   }
 }
