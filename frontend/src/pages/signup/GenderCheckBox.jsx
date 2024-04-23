const GenderCheckBox = () => {
  return (
    <div className="flex mt-2 gap-2">
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="text-base">Male</span>
          <input type="checkbox" className="checkbox border-slate-900" />
        </label>
      </div>
      <div className="from-control">
        <label className="label gap-2 cursor-pointer">
          <span className="text-base">Female</span>
          <input type="checkbox" className="checkbox border-slate-900" />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
