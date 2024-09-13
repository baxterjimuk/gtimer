import { Stack, Typography, Box, Button } from "@mui/material";
import NumberInput from "./NumberInput";
import { useState } from "react";
import { format } from 'date-fns/format';

export default function EtaCalculator() {
  const [duration, setDuration] = useState({ days: 0, hours: 0, minutes: 0 });
  const [expire, setExpire] = useState();

  const handleChange = (max) => (e) => {
    const numbered = Number(e.target.value);
    if (isNaN(numbered)) {
      setDuration({ ...duration, [e.target.name]: 0 });
    } else {
      if (Number.isInteger(numbered)) {
        if (numbered < 0) {
          setDuration({ ...duration, [e.target.name]: 0 });
        } else if (numbered > max) {
          setDuration({ ...duration, [e.target.name]: max });
        } else {
          setDuration({ ...duration, [e.target.name]: numbered });
        }
      } else {
        setDuration({ ...duration, [e.target.name]: 0 });
      }
    }
  }

  return (
    <Stack spacing={2}>
      <Typography variant="body1" gutterBottom>
        You can use this to estimate when the coffee in your mail
        will be gone if you do not use it.
      </Typography>
      <Box component="fieldset" sx={{ width: "fit-content" }}>
        <legend><Typography variant="body1">Remaining Duration</Typography></legend>
        <Stack direction="row" spacing={1}>
          <NumberInput id='day-input' name="days" label='Days' value={duration.days} handleChange={handleChange(99)} />
          <NumberInput id='hour-input' name="hours" label='Hours' value={duration.hours} handleChange={handleChange(23)} />
          <NumberInput id='minute-input' name="minutes" label='Minutes' value={duration.minutes} handleChange={handleChange(59)} />
        </Stack>
      </Box>
      <Button
        variant="contained"
        sx={{ width: "fit-content" }}
        onClick={() => setExpire(new Date())}
      >
        Calculate
      </Button>
      {expire &&
        <Typography variant="body1" gutterBottom>
          {format(expire, 'PPPPpp')}
        </Typography>
      }
      <Typography variant="body1" gutterBottom>
        {`${duration.days} days, ${duration.hours} hours, ${duration.minutes} minutes`}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {`${typeof (duration.days)}--${typeof (duration.hours)}--${typeof (duration.minutes)}`}
      </Typography>
    </Stack>
  )
}