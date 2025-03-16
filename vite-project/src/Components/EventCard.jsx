import React from "react";
import { Card, CardContent, CardMedia, Typography, Chip, Button } from "@mui/material";
import { AccessTime, CalendarMonth, Category, Star, Delete } from "@mui/icons-material";

const EventCard = ({ event, onRemove }) => {
  return (
    <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
      <CardMedia component="img" height="180" image={event.image} alt={event.title} />
      <CardContent>
        <Chip label={event.isFree === "true" ? "FREE" : "PAID"} color={event.isFree === "true" ? "success" : "error"} sx={{ mb: 1 }} />
        <Typography variant="h6" fontWeight="bold">{event.title}</Typography>
        <Typography variant="body2" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <CalendarMonth fontSize="small" /> {event.date}
        </Typography>
        <Typography variant="body2" sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
          <AccessTime fontSize="small" /> {event.time}
        </Typography>
        <Typography variant="body2" sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
          <Category fontSize="small" /> {event.category}
        </Typography>
        <Typography variant="body2" color="primary" sx={{ display: "flex", alignItems: "center", gap: 1, mt: 2, cursor: "pointer" }}>
          <Star fontSize="small" /> Join others in this event
        </Typography>
        <Button variant="contained" fullWidth sx={{ mt: 2 }}>Event Details ↗</Button>
        <Button variant="outlined" color="error" fullWidth sx={{ mt: 1 }} startIcon={<Delete />} onClick={onRemove}>
          Remove Event
        </Button>
      </CardContent>
    </Card>
  );
};

export default EventCard;
