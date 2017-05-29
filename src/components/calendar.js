import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/calendar.scss';
const FaAngleDoubleLeft = require('react-icons/lib/fa/angle-double-left');
const FaAngleDoubleRight = require('react-icons/lib/fa/angle-double-right');
const FaAngleLeft = require('react-icons/lib/fa/angle-left');
const FaAngleRight = require('react-icons/lib/fa/angle-right');

const displayDaysPerMonth = (year) => {
  // 定义每个月的天数，如果是闰年第二月改为29天
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    daysInMonth[1] = 29;
  }
  // 以下为了获取一年中每一个月在日历选择器上显示的数据，
  // 从上个月开始，接着是当月，最后是下个月开头的几天
  // 定义一个数组，保存上一个月的天数
  const daysInPreviousMonth = [].concat(daysInMonth);
  daysInPreviousMonth.unshift(daysInPreviousMonth.pop());
  // 获取每一个月显示数据中需要补足上个月的天数
  const addDaysFromPreMonth = new Array(12)
    .fill(null)
    .map((item, index) => {
      const day = new Date(year, index, 1).getDay();
      if (day === 0) {
        return 6;
      }
      return day - 1;
    });
  // 已数组形式返回一年中每个月的显示数据,每个数据为6行*7天
  return new Array(12)
    .fill([])
    .map((month, monthIndex) => {
      let addDays = addDaysFromPreMonth[monthIndex],
        daysCount = daysInMonth[monthIndex],
        daysCountPrevious = daysInPreviousMonth[monthIndex],
        monthData = [];
      // 补足上一个月
      for (; addDays > 0; addDays--) {
        monthData.unshift(daysCountPrevious--);
      }
      // 添入当前月
      for (let i = 0; i < daysCount;) {
        monthData.push(++i);
      }
      // 补足下一个月
      for (let i = 42 - monthData.length, j = 0; j < i;) {
        monthData.push(++j);
      }
      return monthData;
    });
};


class Calendar extends React.Component {
  constructor(props) {
    super(props);
    const now = new Date();
    this.state = {
      year: now.getFullYear(),
			      month: now.getMonth(),
			      day: now.getDate(),
			      prevEl: ''
    };
  }
  componentDidMount() {
    	window.addEventListener('click', (e) => {
    		const timePickerDOM = ReactDOM.findDOMNode(this.refs.timePicker);
    		if (timePickerDOM) {
    			timePickerDOM.style.display = 'none';
    		}
    	});
    	const timeInput = ReactDOM.findDOMNode(this.refs.timeInput); // input
    timeInput.value = `${this.state.year}-${this.state.month + 1}-${this.state.day}`;
  }

	  // 切换到上一年
	  prevYear = (e) => {
	      this.setState({
	        year: --this.state.year
	      });
	    e.stopPropagation();
	  }
	  // 切换到下一年
	  nextYear = (e) => {
	      this.setState({
	        year: ++this.state.year
	      });
	    e.stopPropagation();
	  }
	  // 切换到上一个月
	  prevMonth = (e) => {
	    if (this.state.month === 0) {
	      this.setState({
	        year: --this.state.year,
	        month: 11
	      });
	    } else {
	      this.setState({
	        month: --this.state.month
	      });
	    }
	    e.stopPropagation();
	  }
	  // 切换到下一个月
	  nextMonth = (e) => {
	    if (this.state.month === 11) {
	      this.setState({
	        year: ++this.state.year,
	        month: 0
	      });
	    } else {
	      this.setState({
	        month: ++this.state.month
	      });
	    }
	    e.stopPropagation();
	  }
	  // 选择日期
	  datePick = (e) => {
	  	// 全部去掉picked类名
	  	const allTr = e.target.parentNode.parentNode.children;
	  	for (const i in allTr) {
	  		if (i == 'length') break;
	  		const allTd = allTr[i].children;
	  		for (const j in allTd) {
	  			if (j == 'length') break;
	  			// console.log(allTd[j])
	  			// console.log(allTd[j].className)
	  			if (allTd[j].className.indexOf(' picked') !== -1) {
		  			allTd[j].className = allTd[j].className.replace(' picked', '');
	  			}
	  		}
	  	}


	  	// e.target.parentNode.parentNode.children.forEach((tr)=>{
	  	// 	tr.forEach((td)=>{
	  	// 		if(td.className.indexOf(' picked') !== -1){
	  	// 			td.className = td.className.replace(' picked','');

	  	// 		}
	  	// 	})
	  	// })
	  	if (e.target.className.indexOf('thisMonth') !== -1) {   // 这个月
	  		// if(e.target.className.indexOf('picked') !== -1) {return}
	  			// if(this.state.prevEl){
	  				// this.state.prevEl.className=this.state.prevEl.className.replace(' picked','');
	  			// }
	  		e.target.className = `${e.target.className} picked`;
	  		this.state.prevEl = e.target;
	  	} else if (e.target.innerText > 20) {      // 上个月
    this.prevMonth(e);
    this.state.prevEl = e.target;
    const day = e.target.innerText;
    ReactDOM.findDOMNode(this.refs.timePicker).style.display = 'none';
	  	} else {       // 下个月
	  		this.state.prevEl = e.target;
    this.nextMonth(e);
    ReactDOM.findDOMNode(this.refs.timePicker).style.display = 'none';
	  	}
    setTimeout(() => {
      const timeInput = ReactDOM.findDOMNode(this.refs.timeInput); // input
  			timeInput.value = `${this.state.year}-${this.state.month + 1}-${this.state.day}`;
    }, 0);
	    this.setState({
	    	day: e.target.innerText
	    });

	    // e.stopPropagation();
	  }
	  show = (e) => {
	  	const timePicker = ReactDOM.findDOMNode(this.refs.timePicker);
	  	const calendar = document.getElementsByClassName('calendar');
	  	const timePicker1 = calendar[0].getElementsByClassName('timePicker')[0];
	  	const timePicker2 = calendar[1].getElementsByClassName('timePicker')[0];
  		timePicker1.style.display = 'none';
  		timePicker2.style.display = 'none';
	  	// if(calendar[0]){
	  	// 	calendar.style.display = 'none';
	  	// }
	  	timePicker.style.display = 'block';

	  	// //显示今日picked类名,用上一个保存的兄弟节点
	  	// if(this.state.prevEl){
				// console.log(this.state.prevEl.parentNode.parentNode.children);
				// let allTr=this.state.prevEl.parentNode.parentNode.children;
		  // 	for(let i in allTr){
		  // 		if(i == 'length') break;
		  // 		let allTd=allTr[i].children;
		  // 		for(let j in allTd){
		  // 			if(j == 'length') break;
		  // 			// console.log(allTd[j])
		  // 			// console.log(allTd[j].className)
		  // 			if(allTd[j].className.indexOf(' picked') !== -1){
			 //  			allTd[j].className = allTd[j].className.replace(' picked','');
		  // 			}
		  // 		}
		  // 	}
	  	// }

	  	e.stopPropagation();
	  }

	  // 选择今天日期
	  PickTOday = () => {
	  	const now = new Date();
    this.state = {
      year: now.getFullYear(),
			      month: now.getMonth(),
			      day: now.getDate()
    };
    setTimeout(() => {
      const timeInput = ReactDOM.findDOMNode(this.refs.timeInput); // input
	  			timeInput.value = `${this.state.year}-${this.state.month + 1}-${this.state.day}`;
    }, 0);
        // 点击今天，picked的类名去掉
    const allTr = ReactDOM.findDOMNode(this.refs.tbody).children;
    for (const i in allTr) {
	  		if (i == 'length') break;
	  		const allTd = allTr[i].children;
	  		for (const j in allTd) {
	  			if (j == 'length') break;
	  			if (allTd[j].className.indexOf(' picked') !== -1) {
		  			allTd[j].className = allTd[j].className.replace(' picked', '');
	  			}
	  		}
	  	}
	  }


  render() {
    	const month = this.state.month;  // 当月序号
    	const viewData = displayDaysPerMonth(this.state.year); // 一年的数据
    	const rowsInMonth = [[], [], [], [], [], []];
    	viewData[month] = viewData[month].map((item, index) => {   // 当月数值数据变成对象数据，用来保存className
    		const data = {};
    		data.data = item;
    		data.className = 'thisMonth';
    		return data;
    	});
    	let isThisMonth = false;
    	viewData[month].forEach((item, index) => {   // 赋className是否当月的值
    		if (item.data === 1) {
    			isThisMonth = !isThisMonth;
    			item.className = isThisMonth ? 'thisMonth' : 'notThisMonth';
    		} else if (!isThisMonth && item.data !== 1) {
    			item.className = 'notThisMonth';
    		} else {
    			item.className = 'thisMonth';
    		}
    	});
    	viewData[month].forEach((item, index) => {   // 赋行数的值
    			const rowIndex = parseInt(index / 7);
    			rowsInMonth[rowIndex].push(item);
    	});
    	const showData =
			      		rowsInMonth.map((row, rowIndex) => (<tr key={rowIndex}>
  {
			      					row.map((item, index) => <td key={`${rowIndex}${index}`} className={item.className} onClick={this.datePick}>{item.data}</td>)
			      				}
			      				</tr>));
    	return (<div className="calendar">
      <input placeholder="请选择日期" className="timeInput" ref="timeInput" onClick={this.show} />
      <div className="timePicker" ref="timePicker">
        <div className="timePickerHeader">
          <FaAngleDoubleLeft className="floatLeft calendarDoubleLeft" onClick={this.prevYear} /> <FaAngleLeft className="floatLeft calendarLeft" onClick={this.prevMonth} /> {this.state.year}年{this.state.month + 1}月{this.state.day}日                                                                                                               <FaAngleDoubleRight className="floatRight calendarDoubleRight" onClick={this.nextYear} /><FaAngleRight className="floatRight calendarRight" onClick={this.nextMonth} />
        </div>
        <div className="timePickerBody">
          <table>
            <thead>
              <tr>
                <th>一</th>
                <th>二</th>
                <th>三</th>
                <th>四</th>
                <th>五</th>
                <th>六</th>
                <th>日</th>
              </tr>
            </thead>
            <tbody ref="tbody">
              {showData}
            </tbody>
          </table>
        </div>
        <div className="timePickerFooter" onClick={this.PickTOday}>今天</div>
      </div>
    </div>);
  }

}


/*
		      			*<tr>
		      				<td>27</td>
		      				<td>28</td>
		      				<td>29</td>
		      				<td>30</td>
		      				<td>31</td>
		      				<td>1</td>
		      				<td>2</td>
		      			</tr>
		      			<tr>
		      				<td>3</td>
		      				<td>4</td>
		      				<td>5</td>
		      				<td>6</td>
		      				<td>7</td>
		      				<td>8</td>
		      				<td>9</td>
		      			</tr>
		      	 		<tr>
		      				<td>10</td>
		      				<td>11</td>
		      				<td>12</td>
		      				<td>13</td>
		      				<td>14</td>
		      				<td>15</td>
		      				<td>16</td>
		      			</tr>
		       			<tr>
		      				<td>17</td>
		      				<td>18</td>
		      				<td>19</td>
		      				<td>20</td>
		      				<td>21</td>
		      				<td>22</td>
		      				<td>23</td>
		      			</tr>
		      			<tr>
		      				<td>24</td>
		      				<td>25</td>
		      				<td>26</td>
		      				<td>27</td>
		      				<td>28</td>
		      				<td>29</td>
		      				<td>30</td>
		      			</tr>
	      		 		<tr>
		      				<td>1</td>
		      				<td>2</td>
		      				<td>3</td>
		      				<td>4</td>
		      				<td>5</td>
		      				<td>6</td>
		      				<td>7</td>
		      			</tr>*/

export default Calendar;
