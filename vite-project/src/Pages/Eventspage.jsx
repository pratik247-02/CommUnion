import React, { useState } from "react";
import { Box, Typography, TextField, MenuItem, Button } from "@mui/material";
import EventCard from "../Components/EventCard";

const categories = ["Religious", "Social", "Charity", "Educational"];

const defaultEvents = [
  {
    title: "Ram Navami Festival 2025",
    date: "March 17, 2025",
    time: "4:00 PM IST - 10:00 PM IST",
    category: "Religious",
    image: "https://www.bankbazaar.com/images/india/infographic/ram-navami.webp",
    isFree: "true",
  }
];


const Eventspage = () => {
  const [events, setEvents] = useState(defaultEvents);
  const [newEvent, setNewEvent] = useState({ title: "", date: "", category: "", isFree: "", time: "", image: "" });
  const [filter, setFilter] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prev) => ({ ...prev, [name]: value }));
  };

  const handleRemoveEvent = (index) => {
    setEvents(events.filter((_, i) => i !== index));
  };  

  const handleAddEvent = () => {
    if (Object.values(newEvent).every((val) => val.trim() !== "")) {
      setEvents([...events, newEvent]);
      setNewEvent({ title: "", date: "", category: "", isFree: "", time: "", image: "" });
    }
  };

  const filteredEvents = filter ? events.filter((event) => event.category === filter) : events;

  return (
    <Box sx={{ p: 4, background: "linear-gradient(135deg, #1e1e2f, #3a3a5a)", minHeight: "100vh", color: "white" }}>
      <Typography variant="h4" fontWeight="bold" mb={2} textAlign="center">🔥 Upcoming Events 🔥</Typography>

      {/* Form */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 3, background: "rgba(255, 255, 255, 0.1)", p: 3, borderRadius: 3, backdropFilter: "blur(10px)", boxShadow: "0 4px 10px rgba(0,0,0,0.3)" }}>
        <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
          <TextField label="Event Title" name="title" value={newEvent.title} onChange={handleInputChange} fullWidth variant="filled" sx={{ background: "rgba(255,255,255,0.2)", borderRadius: 2, color: "white" }} />
          <TextField select label="Category" name="category" value={newEvent.category} onChange={handleInputChange} fullWidth variant="filled" sx={{ background: "rgba(255,255,255,0.2)", borderRadius: 2, color: "white" }}>
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>{cat}</MenuItem>
            ))}
          </TextField>
        </Box>
        <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
          <TextField label="Date" type="date" name="date" value={newEvent.date} onChange={handleInputChange} fullWidth variant="filled" sx={{ background: "rgba(255,255,255,0.2)", borderRadius: 2, color: "white" }} />
          <TextField select label="Free/Paid" name="isFree" value={newEvent.isFree} onChange={handleInputChange} fullWidth variant="filled" sx={{ background: "rgba(255,255,255,0.2)", borderRadius: 2, color: "white" }}>
            <MenuItem value="true">Free</MenuItem>
            <MenuItem value="false">Paid</MenuItem>
          </TextField>
          <TextField label="Time" name="time" value={newEvent.time} onChange={handleInputChange} fullWidth variant="filled" sx={{ background: "rgba(255,255,255,0.2)", borderRadius: 2, color: "white" }} />
        </Box>
        <TextField label="Image URL" name="image" value={newEvent.image} onChange={handleInputChange} fullWidth variant="filled" sx={{ background: "rgba(255,255,255,0.2)", borderRadius: 2, color: "white" }} />
        <Button variant="contained" onClick={handleAddEvent} sx={{ bgcolor: "#ff4081", '&:hover': { bgcolor: "#f50057" }, color: "white", borderRadius: 2 }}>Add Event</Button>
      </Box>

      {/* Category Filter */}
      <TextField select label="Filter by Category" value={filter} onChange={(e) => setFilter(e.target.value)} fullWidth variant="filled" sx={{ background: "rgba(255,255,255,0.2)", borderRadius: 2, mb: 4, color: "white" }}>
        <MenuItem value="">All</MenuItem>
        {categories.map((cat) => (
          <MenuItem key={cat} value={cat}>{cat}</MenuItem>
        ))}
      </TextField>

      {/* Events Grid */}
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 3, mt: 4 }}>
        {filteredEvents.map((event, index) => (
          <EventCard key={index} event={event} onRemove={() => handleRemoveEvent(index)} />

        ))}
      </Box>
    </Box>
  );
};

export default Eventspage;
