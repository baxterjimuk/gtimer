import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

const NumberInput = ({ id, name, label, value, handleChange }) => {
  return (
    <FormControl sx={{ maxWidth: "10ch" }}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput
        id={id}
        name={name}
        label={label}
        value={value}
        type="Number"
        onChange={handleChange}
        onFocus={(e) => e.target.select()}
      />
    </FormControl>
  )
}

export default NumberInput;