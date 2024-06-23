// src/components/WeeklyPlan.js
import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const WeeklyPlan = ({ weeklyPlan }) => {
  return (
    <Container maxWidth="md">
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Weekly Plan
        </Typography>
        {weeklyPlan.map(dayPlan => (
          <Paper elevation={3} sx={{ p: 2, mb: 2 }} key={dayPlan.day}>
            <Typography variant="h6">{dayPlan.day}</Typography>
            <Typography variant="body1">Breakfast: {dayPlan.meals.breakfast}</Typography>
            <Typography variant="body1">Morning Snack: {dayPlan.meals.morningSnack}</Typography>
            <Typography variant="body1">Lunch: {dayPlan.meals.lunch}</Typography>
            <Typography variant="body1">Afternoon Snack: {dayPlan.meals.afternoonSnack}</Typography>
            <Typography variant="body1">Dinner: {dayPlan.meals.dinner}</Typography>
          </Paper>
        ))}
      </Box>
    </Container>
  );
};

export default WeeklyPlan;

