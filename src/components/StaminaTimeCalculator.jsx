import { Stack, Typography, Button } from "@mui/material";
import NumberInput from "./NumberInput";
import { useState } from "react";
import { format } from 'date-fns/format';
import { add } from 'date-fns';

export default function StaminaTimeCalculator() {
  // const [maxStamina, setMaxStamina] = useState();
  // const [currentStamina, setCurrentStamina] = useState();
  // const [oneStaminaDuration, setOneStaminaDuration] = useState();
  const [val, setVal] = useState({ maxStamina: 90, currentStamina: 0, oneStaminaDuration: 10 });
  const [result, setResult] = useState();

  const handleChange = (max) => (e) => {
    const numbered = Number(e.target.value);
    if (isNaN(numbered)) {
      setVal({ ...val, [e.target.name]: 0 });
    } else {
      if (Number.isInteger(numbered)) {
        if (numbered < 0) {
          setVal({ ...val, [e.target.name]: 0 });
        } else if (numbered > max) {
          setVal({ ...val, [e.target.name]: max });
        } else {
          setVal({ ...val, [e.target.name]: numbered });
        }
      } else {
        setVal({ ...val, [e.target.name]: 0 });
      }
    }
  }

  return (
    <Stack spacing={2}>
      <Typography variant="body1" gutterBottom>
        Amount of Stamina to reach:
      </Typography>
      <NumberInput id='max-stamina-input' name="max-stamina" value={val.maxStamina} handleChange={handleChange(90)} />
      <Typography variant="body1" gutterBottom>
        Current Stamina:
      </Typography>
      <NumberInput id='current-stamina-input' name="current-stamina" value={val.currentStamina} handleChange={handleChange(90)} />
      <Typography variant="body1" gutterBottom>
        Minute(s) taken for Stamina to regenerate by one (1) point:
      </Typography>
      <NumberInput id='one-stamina-duration-input' name="one-stamina-duration" value={val.oneStaminaDuration} handleChange={handleChange(59)} />
      <Stack direction="row" spacing={1}>
        <Button
          variant="contained"
          sx={{ width: "fit-content" }}
          onClick={() => setResult(add(new Date(), { minutes: ((val.maxStamina - val.currentStamina) * val.oneStaminaDuration) }))}
        >
          Calculate
        </Button>
        <Button
          variant="contained"
          sx={{ width: "fit-content" }}
          onClick={() => {
            setVal(({ maxStamina: 90, currentStamina: 0, oneStaminaDuration: 10 }));
            setResult(null);
          }}
        >
          Reset
        </Button>
      </Stack>
      {result &&
        <Typography variant="body1" gutterBottom>
          Based on the clock shown in the title, Stamina is estimated
          to be <strong>{val.maxStamina}</strong> by <strong>{format(result, 'PPPPpp')}</strong>
        </Typography>
      }
    </Stack>
  )
}