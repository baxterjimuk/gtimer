import { Stack, Typography, Button, Card, CardContent, CardHeader } from "@mui/material";
import NumberInput from "./NumberInput";
import { useState } from "react";
import { format } from 'date-fns/format';
import { add } from 'date-fns';
import * as duration from 'duration-fns'

export default function ColoTixCalculator() {
  const [val, setVal] = useState({
    maxTix: 5,
    currentTix: 0,
    oneTixHours: 2,
    oneTixMinutes: 30,
    oneTixSeconds: 0,
    countdownHours: 0,
    countdownMinutes: 0,
    countdownSeconds: 0
  })
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
    <Card variant="outlined">
      <CardHeader title="COLOSSEUM TICKET TIME" />
      <CardContent>
        <Stack spacing={1}>
          <Typography variant="body1" gutterBottom>
            Amount of Colosseum Ticket(s) to reach:
          </Typography>
          <NumberInput id='max-tix-input' name="maxTix" value={val.maxTix} handleChange={handleChange(5)} />
          <Typography variant="body1" gutterBottom>
            Current Colosseum Ticket(s):
          </Typography>
          <NumberInput id='current-tix-input' name="currentTix" value={val.currentTix} handleChange={handleChange(val.maxTix)} />
          <Typography variant="body1">Duration taken to regenerate one (1) Colosseum Ticket</Typography>
          <Stack direction="row" spacing={1}>
            <NumberInput id='one-hours-input' name="oneTixHours" label='Hours' value={val.oneTixHours} handleChange={handleChange(23)} />
            <NumberInput id='one-minutes-input' name="oneTixMinutes" label='Minutes' value={val.oneTixMinutes} handleChange={handleChange(59)} />
            <NumberInput id='one-seconds-input' name="oneTixSeconds" label='Seconds' value={val.oneTixSeconds} handleChange={handleChange(59)} />
          </Stack>
          <Typography variant="body1">Colosseum Ticket regeneration countdown currently shown in-game</Typography>
          <Stack direction="row" spacing={1}>
            <NumberInput id='countdown-hours-input' name="countdownHours" label='Hours' value={val.countdownHours} handleChange={handleChange(23)} />
            <NumberInput id='countdown-minutes-input' name="countdownMinutes" label='Minutes' value={val.countdownMinutes} handleChange={handleChange(59)} />
            <NumberInput id='countdown-seconds-input' name="countdownSeconds" label='Seconds' value={val.countdownSeconds} handleChange={handleChange(59)} />
          </Stack>
          <Stack direction="row" spacing={1}>
            <Button
              variant="contained"
              sx={{ width: "fit-content" }}
              onClick={() => {
                const tixDiff = val.maxTix - val.currentTix
                const oneTixDuration = duration.toSeconds({
                  hours: val.oneTixHours,
                  minutes: val.oneTixMinutes,
                  seconds: val.oneTixSeconds
                });
                const countdown = duration.toSeconds({
                  hours: val.countdownHours,
                  minutes: val.countdownMinutes,
                  seconds: val.countdownSeconds
                });
                const secondsPassed = oneTixDuration - countdown;
                const secondsNeeded = tixDiff * oneTixDuration - secondsPassed;
                setResult(add(new Date(), { seconds: secondsNeeded }));
              }}
            >
              Calculate
            </Button>
            <Button
              variant="contained"
              sx={{ width: "fit-content" }}
              onClick={() => {
                setVal(({
                  maxTix: 5,
                  currentTix: 0,
                  oneTixHours: 2,
                  oneTixMinutes: 30,
                  oneTixSeconds: 0,
                  countdownHours: 0,
                  countdownMinutes: 0,
                  countdownSeconds: 0
                }));
                setResult(null);
              }}
            >
              Reset
            </Button>
          </Stack>
          {result &&
            <Typography variant="body1" gutterBottom>
              Based on the clock shown in the title, Colosseum Ticket is estimated
              to be <strong>{val.maxTix}</strong> by <strong>{format(result, 'PPPPpp')}</strong>
            </Typography>
          }
        </Stack>
      </CardContent>
    </Card>
  )
}