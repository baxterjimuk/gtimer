import { Stack, Typography, Box, Button, Card, CardContent, CardHeader } from "@mui/material";
import NumberInput from "./NumberInput";
import { useState } from "react";
import { format } from 'date-fns/format';
import { add } from 'date-fns';

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
    <Card variant="outlined">
      <CardHeader title="MAIL EXPIRY TIME" />
      <CardContent>
        <Stack spacing={1}>
          <Typography variant="body1" gutterBottom>
            You can use this to estimate <strong>WHEN</strong> any mail of yours will be gone
            if you do not claim it within the given duration.
          </Typography>
          <Box component="fieldset" sx={{ width: "fit-content" }}>
            <legend><Typography variant="body1">Remaining Duration</Typography></legend>
            <Stack direction="row" spacing={1}>
              <NumberInput id='day-input' name="days" label='Days' value={duration.days} handleChange={handleChange(99)} />
              <NumberInput id='hour-input' name="hours" label='Hours' value={duration.hours} handleChange={handleChange(23)} />
              <NumberInput id='minute-input' name="minutes" label='Minutes' value={duration.minutes} handleChange={handleChange(59)} />
            </Stack>
          </Box>
          <Stack direction="row" spacing={1}>
            <Button
              variant="contained"
              sx={{ width: "fit-content" }}
              onClick={() => setExpire(add(new Date(), { days: duration.days, hours: duration.hours, minutes: duration.minutes }))}
            >
              Calculate
            </Button>
            <Button
              variant="contained"
              sx={{ width: "fit-content" }}
              onClick={() => {
                setDuration({ days: 0, hours: 0, minutes: 0 });
                setExpire(null);
              }}
            >
              Reset
            </Button>
          </Stack>
          {/* reset button to set remaining duration to zeros and also remove result */}
          {expire &&
            <Typography variant="body1" gutterBottom>
              Based on the clock shown in the title, the mail with the given remaining duration is estimated
              to be gone by <strong>{format(expire, 'PPPPpp')}</strong>
            </Typography>
          }
        </Stack>
      </CardContent>
    </Card>
  )
}