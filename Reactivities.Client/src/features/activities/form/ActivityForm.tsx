import { Box, Button, Paper, Typography } from "@mui/material";
import { useEffect } from "react";
import { useActivities } from "../../../lib/hooks/useActivities";
import { useNavigate, useParams } from "react-router";
import { FieldValues, useForm } from 'react-hook-form';
import { activitySchema, ActivitySchema } from "../../../lib/schemas/activitySchema";
import { zodResolver } from '@hookform/resolvers/zod';
import TextInput from "../../../app/shared/components/TextInput";
import SelectInput from "../../../app/shared/components/SelectInput";
import { categoryOptions } from "./categoryOptions";
import DateTimeInput from "../../../app/shared/components/DateTimeInput";
import LocationInput from "../../../app/shared/components/LocationInput";

export default function ActivityForm() {
  const { reset, handleSubmit, control } = useForm<ActivitySchema>({
    mode: 'onTouched',
    resolver: zodResolver(activitySchema)
  });

  const { id } = useParams();
  const { updateActivity, createActivity, activity, isLoadingActivity } = useActivities(id);

  const navigate = useNavigate();

  useEffect(() => {
    if (activity) reset({
      ...activity,
      location: {
        city: activity.city,
        venue: activity.venue,
        latitude: activity.latitude,
        longitude: activity.longitude
      }
    });
  }, [activity, reset]);

  const onSubmit = async (data: FieldValues) => {
    console.log(1, data);
    const { location, ...rest } = data;
    const flattenedData = { ...rest, ...location };

    console.log(2, flattenedData);
    try {
      if (activity) {
        updateActivity.mutate({ ...activity, ...flattenedData }, {
          onSuccess: () => navigate(`/activities/${activity.id}`),
        });
      }
      else {
        createActivity.mutate(flattenedData, {
          onSuccess: (id) => navigate(`/activities/${id}`),
        });
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  if (isLoadingActivity) return <Typography>Loading activity...</Typography>

  return (
    <Paper sx={{ borderRadius: 3, padding: 3 }}>
      <Typography variant="h5" gutterBottom color="primary">
        {activity ? 'Edit Activity' : 'Create Activity'}
      </Typography>
      <Box component='form' onSubmit={handleSubmit(onSubmit)} display='flex' flexDirection='column' gap={3}>
        <TextInput label='Title' control={control} name='title' />
        <TextInput label='Description' control={control} name='description'
          multiline rows={3} />
        <Box display='flex' gap={3}>
          <SelectInput items={categoryOptions} label='Category'
            control={control} name='category'
          />
          <DateTimeInput label='Date' control={control} name='date' />
        </Box>

        <LocationInput control={control} label='Enter the location' name="location" />

        <Box display='flex' justifyContent='end' gap={3}>
          <Button onClick={() => { navigate('/activities') }} color="inherit">Cancel</Button>
          <Button
            type="submit"
            color="success"
            variant="contained"
            disabled={updateActivity.isPending || createActivity.isPending}
          >Submit</Button>
        </Box>
      </Box>
    </Paper>
  )
}