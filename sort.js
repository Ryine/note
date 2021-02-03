//插入排序
function insertionSort(arr) {
    for(var i = 1; i < arr.length; i++) {
        //把当前待比较项赋给中间量
        var tmp = arr[i];
        //从当前元素位置向左扫描，找到当前元素的正确位置，插入
        for(var j = i; j > 0 && arr[j-1] > tmp; j--) {
            arr[j] = arr[j-1];
        }
        arr[j] = tmp;
    }   
}
//希尔排序
function shellSort(arr) {
    var gap = Math.floor(arr.length/2);//设置间隔
    while(gap >= 1){
         //把距离为 gap 的元素编为一个组，扫描所有组
        for(var i = gap; i < arr.length; i++) {
            var tmp = arr[i];
            // 对距离为 gap 的元素组进行排序
            for(var j = i-gap; j >= 0 && arr[j] > tmp; j -= gap) {
                arr[j+gap] = arr[j];
            }
            arr[j+gap] = tmp;
        }
        gap = Math.floor(gap/2);
    }

}

//冒泡排序
function bubbleSort(arr){
    for(var i = 0; i < arr.length; i++) {
        //把最大的元素上浮到数组末尾
        for(var j = 0; j < arr.length-i-1; j++) {
           // 比较相邻的元素，如果前面的数大于后面的数，则交换
            if(arr[j] > arr[j+1]){
                var tmp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = tmp;
            }
        }
    }
}

//简单选择排序
function selectionSort(arr) {
    for(var i = 0; i < arr.length; i++) {
        //将当前位置设为最小值
        var min = i;
        //检查数组其余部分是否更小
        for(j = i + 1; j < arr.length; j++) {
            if(arr[min] > arr[j]) {
                min = j;
            }
        }
        //如果当前位置不是最小值，将其换为最小值
        if(i != min) {
            var tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
}

//堆排序
function adjustHeap(arr,i,n) { 
    for(var tmp = arr[i];  2 * i + 1 < n; i = child) {
        var child =2 * i + 1;
        //判断当前节点是否有右节点，若右节点较大，就采用右节点和当前节点进行比较
        if(child != n - 1 && arr[child] < arr[child+1]) {
            child++;
        }
        //比较当前节点和最大的子节点，小于就交换，交换后将当前节点定位到子节点上
        if(tmp < arr[child]) {
            arr[i] = arr[child];
        } else{
            break;
        } 
    }
    arr[i] = tmp;
}
function heapSort(arr) {
    //构建最大堆,只需要遍历二叉树一半的节点
    for(var i = Math.floor(arr.length/2); i >= 0; i--) {
        adjustHeap(arr,i,arr.length);
    }
    //构造完之后 把堆顶的值和最后一个互换，然后排除最后一个继续进行打造最大堆
    for(i = arr.length-1; i > 0; i--) {
        var tmp = arr[i];
        arr[i] = arr[0];
        arr[0] = tmp;
        adjustHeap(arr,0,i);
    }
}

//归并排序
function mergeSort(arr) {
    //只有一个数时退出递归
    if(arr.length < 2) {
        return arr;
    }
    //拆分
    var center = Math.floor(arr.length / 2),
        left = arr.slice(0,center),
        right = arr.slice(center);
    return merge(mergeSort(left),mergeSort(right));
}
function merge(left,right) {
    
    //按大小顺序合并
    var result = [];
    while(left.length > 0 && right.length > 0) {
        if(left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    //当左右数组长度不等.将剩下的数组项链接起来
    return result.concat(left,right);
}


//快速排序
function quickSort(arr) {
    if(arr.length <= 1) {
        return arr;
    }
    var pivotIndex = Math.floor(arr.length / 2),
        pivot = arr[pivotIndex],
        same = [],
        less = [],
        more = [];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == pivot) {
            same.push(arr[i]);
        } else if(arr[i] < pivot) {
            less.push(arr[i]);
        } else {
            more.push(arr[i]);
        }
    }
    return quickSort(less).concat(same,quickSort(more));
}    

   
function swap(arr,a,b) {
    var tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
}
function partition(arr,left,right) {
    var pivot = arr[right],
        pos = left;
    for(var i = left; i < right; i++) {
        if(arr[i] < pivot) {
            swap(arr,pos,i);
            pos++;
            
        }
    }
    swap(arr,right,pos);
    return pos;
}
function qSort(arr,left,right) {
    if(left < right) {
        var pos = partition(arr,left,right);
        qSort(arr,left,pos-1);
        qSort(arr,pos+1,right);
    }
}
function quickSort1(arr) {
    qSort(arr,0,arr.length-1);
}
brr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(brr);
console.log(mergeSort(brr));
