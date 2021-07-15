import React, { useState, useEffect } from "react";
const educationOptions = [
  { label: "کارشناسی", value: "کارشناسی" },
  { label: "کارشناسی ارشد", value: " کارشناسی ارشد" },
  { label: "دکتری", value: "دکتری" },
];
const Courses = [
  { label: "زبان انگلیسی", value: "زبان انگلیسی" },
  { label: "زبان انگلیسی", value: "زبان انگلیسی" },
  { label: "زبان انگلیسی", value: "زبان انگلیسی" },
  { label: "زبان انگلیسی", value: "زبان انگلیسی" },
  { label: "زبان انگلیسی", value: "زبان انگلیسی" },
];

/*-----------------------------------*/
const workExperienceOptions = [
  { label: "دارم", value: true },
  { label: "ندارم", value: false },
];

export function TeacherForm(props) {
  const [typeOfTeachings, setTypeOfTeachings] = useState({
    online: false,
    presence: false,
  });
  const [data, setData] = useState({
    Education: "کارشناسی",
    Course: "زبان انگلیسی",
  });

  const [discription, setDescription] = useState("");

  /*------------------------------*/
  useEffect(() => {
    props.data(data);
    // console.log(typeOfTeachings);
  }, [data]);
  /*------------------------------*/
  const typeOfTeachingsChangeHandler = (e) => {
    setData({
      ...data,
      typeOfTeachings: {
        ...data.typeOfTeachings,
        [e.target.value]: e.target.checked,
      },
    });
  };
  /*------------------------------*/

  const selectHandler = async (event) => {
    await setData({ ...data, education: event.target.value });
  };
  /*------------------------------------------*/

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div
            className="input-group mb-3"
            onChange={(e) => setData({ ...data, Education: e.target.value })}
          >
            <select
              className="custom-select"
              id="inputGroupSelect"
              onChange={selectHandler}
            >
              {educationOptions.map((option) => (
                <option
                  value={option.value}
                  selected={option.selected || false}
                >
                  {option.label}
                </option>
              ))}
            </select>
            <div className="input-group-prepend">
              <label
                className="input-group-text bg-dark text-light"
                htmlFor="inputGroupSelect"
              >
                : تحصیلات
              </label>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="input-group mb-3 justify-content-end ">
            <div
              className="ml-auto pt-1"
              onChange={(e) =>
                setData({ ...data, workExperienc: e.target.value })
              }
            >
              <input type="radio" value="true" name="gender" /> دارم
              <input type="radio" value="false" name="gender" /> ندارم
            </div>
            <div className="input-group-prepend ">
              <label
                className="input-group-text bg-dark text-light"
                htmlFor="inputGroupSelect"
              >
                : سوابق کاری
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center border-bt mb-2 ">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <select
              className="custom-select"
              id="inputGroupSelect"
              onChange={(e) => setData({ ...data, Course: e.target.value })}
            >
              {Courses.map((option) => (
                <option
                  value={option.value}
                  selected={option.selected || false}
                >
                  {option.label}
                </option>
              ))}
            </select>
            <div className="input-group-prepend">
              <label
                className="input-group-text bg-dark text-light"
                htmlFor="inputGroupSelect"
              >
                : رشته تدریس
              </label>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="input-group mb-3 justify-content-end ">
            <div className="ml-auto pt-1">
              <input
                type="checkbox"
                value="presence"
                onChange={typeOfTeachingsChangeHandler}
              />{" "}
              حضوری
              <input
                type="checkbox"
                value="online"
                onChange={typeOfTeachingsChangeHandler}
              />{" "}
              مجازی
            </div>
            <div className="input-group-prepend ">
              <label
                className="input-group-text bg-dark text-light"
                htmlFor="inputGroupSelect"
              >
                : نوع تدریس
              </label>
            </div>
          </div>
        </div>
      </div>
      <div classNam="row">
        <label
          className="h5 font-weight-normal text-skillas-secondary"
          htmlFor="discription"
        >
          دوست داریم اینجا یکم راجب خودتون بگین :
        </label>
        <textarea
          className="form-control textarea"
          name="disc"
          id="discription"
          rows="3"
          onChange={(e) => {
            setData({ ...data, discription: e.target.value });
          }}
        />
      </div>
    </div>
  );
}
