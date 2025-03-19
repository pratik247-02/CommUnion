import React from "react";
import { Card, CardContent, CardMedia, Typography, Chip, Button } from "@mui/material";
import { AccessTime, CalendarMonth, Category, Star, Delete, LocationOn } from "@mui/icons-material";

const EventCard = ({ event, onRemove }) => {
  return (
    <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
      <CardMedia component="img" height="180" image={event.image} alt={event.title} />
      <CardContent>
        {/* Free/Paid Label */}
        <Chip label={event.isFree === "true" ? "FREE" : "PAID"} color={event.isFree === "true" ? "success" : "error"} sx={{ mb: 1 }} />

        {/* Event Title */}
        <Typography variant="h6" fontWeight="bold">{event.title}</Typography>

        {/* Event Date */}
        <Typography variant="body2" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <CalendarMonth fontSize="small" /> {event.date}
        </Typography>

        {/* Event Time */}
        <Typography variant="body2" sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
          <AccessTime fontSize="small" /> {event.time}
        </Typography>

        {/* Event Location ✅ (Newly added) */}
        <Typography variant="body2" sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
          <LocationOn fontSize="small" color="primary" /> {event.location}
        </Typography>

        {/* Event Category */}
        <Typography variant="body2" sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
          <Category fontSize="small" /> {event.category}
        </Typography>

        {/* Join Others */}
        <Typography variant="body2" color="primary" sx={{ display: "flex", alignItems: "center", gap: 1, mt: 2, cursor: "pointer" }}>
          <Star fontSize="small" /> Join others in this event
        </Typography>

        {/* Buttons */}
        <Button variant="contained" fullWidth sx={{ mt: 2 }}>Event Details ↗</Button>
        <Button variant="outlined" color="error" fullWidth sx={{ mt: 1 }} startIcon={<Delete />} onClick={onRemove}>
          Remove Event
        </Button>
      </CardContent>
    </Card>
  );
};

export default EventCard;
