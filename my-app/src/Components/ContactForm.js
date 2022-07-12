import { useForm } from "react-hook-form";
import { TextField, IconButton, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export const ContactForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Box
      component="form"
      sx={{
        mt: "10vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        placeholder="Name"
        variant="standard"
        margin="normal"
        sx={{ width: "28vw" }}
        {...register("Name", {})}
      />
      <TextField
        placeholder="Email Address"
        variant="standard"
        margin="normal"
        sx={{ width: "28vw" }}
        {...register("Email Address", {})}
      />
      <TextField
        placeholder="Message"
        variant="standard"
        margin="normal"
        sx={{ width: "28vw" }}
        {...register("Message", {})}
      />
      <IconButton disableRipple type="submit">
        <SendIcon
          sx={{
            ml: "25vw",
            mt: "1vh",
          }}
        />
      </IconButton>
    </Box>
  );
};
