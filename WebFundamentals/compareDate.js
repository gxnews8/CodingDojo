function compareDate(start,end){ 
            if(start==null||start.length==0||end==null||end.length==0){
                return 0;
            }

            var arr=start.split("-");
            var starttime=new Date(arr[0],parseInt(arr[1]-1),arr[2]);
            var starttimes=starttime.getTime();

            var arrs=end.split("-");
            var endtime=new Date(arrs[0],parseInt(arrs[1]-1),arrs[2]);
            var endtimes=endtime.getTime();

            var intervalTime = endtimes-starttimes;
            var Inter_Days = ((intervalTime).toFixed(2)/86400000)+1;

            return Inter_Days;
        }
console.log(compareDate('2016-10-27', '2016-12-25'));
