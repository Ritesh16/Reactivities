import { Grid2, Typography } from "@mui/material";

export default function PhotoUploadWidget() {
  return (
    <Grid2 container spacing={3}>
        <Grid2 size={4}>
            <Typography variant="overline" color="secondary">Step 1 - Add Photo</Typography>
        </Grid2>
        <Grid2 size={4}>
            <Typography variant="overline" color="secondary">Step 2 - Resize image</Typography>
        </Grid2>
        <Grid2 size={4}>
            <Typography variant="overline" color="secondary">Step 3 - Preview & upload</Typography>
        </Grid2>
    </Grid2>
  )
}