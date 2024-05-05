const GenderCheckBox = ({ gender, onGenderChange }) => {
  return (
    <div className="flex gap-2 mt-2">
      <div className="form-control">
        <label className={`gap-2 cursor-pointer label `}>
          <span className="text-base">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={gender === "male"}
            onChange={() => onGenderChange("male")}
          />
        </label>
      </div>
      <div className="from-control">
        <label className={`gap-2 cursor-pointer label `}>
          <span className="text-base">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={gender === "female"}
            onChange={() => onGenderChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
