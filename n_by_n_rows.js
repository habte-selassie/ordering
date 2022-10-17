let rows =   [1,2,3,4];
let columns =  [1,2,3,4];



function matrix(columns,rows){
    for (let i = 0; i < rows.length; i++) {
        
        for (let j = 0; j < columns.length; j++) {
           
             const matrixa = columns[0]
             const matrixa1 = rows[0];
             const joiner = matrixa + " " +matrixa1
             const joiner1 = matrixa + " " +matrixa1
             const alljoiner =  joiner+ " " +joiner1;
             console.log(alljoiner);
        }

        }
     }

matrix(columns,rows);



// console.log(alljoiner);