function InputBox({
  label
}) {
  return (
    <div>
      <div className="text-slate-500 text-md  pt-1 px-4 pb-4">
        {label}
      </div>
      <input placeholder={placeholder} className="w-full px-2 py-1 border rounded border-slate-200" />
    </div>
  )
}

export default InputBox;
