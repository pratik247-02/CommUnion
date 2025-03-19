import React from "react";
import { Card, CardContent, CardMedia, Typography, Chip, Button, Box } from "@mui/material";
import { AccessTime, CalendarMonth, Category, Star, Delete, LocationOn } from "@mui/icons-material";

const EventCard = ({ event, onRemove }) => {
  return (
    <Card sx={{ boxShadow: 3, borderRadius: 2, position: "relative" }}>
      {/* Free/Paid Badge Inside Image (Top-Right) ✅ */}
      <Box sx={{ position: "absolute", top: 8, right: 8, zIndex: 2 }}>
        <Chip
          label={event.isFree === "true" ? "FREE" : "PAID"}
          color={event.isFree === "true" ? "success" : "error"}
          size="small"
          sx={{ fontWeight: "bold", background: event.isFree === "true" ? "#2e7d32" : "#d32f2f", color: "white" }}
        />
      </Box>

      {/* Event Image */}
      <CardMedia component="img" height="180" image={event.image} alt={event.title} />

      <CardContent>

         {/* Event Category ✅ (Now in Free/Paid Position) */}
         <Chip label={event.category} color="primary" sx={{ mt: 1, fontWeight: "bold" }} />
         
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

        {/* Event Location ✅ */}
        <Typography variant="body2" sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
          <LocationOn fontSize="small" color="primary" /> {event.location}
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
