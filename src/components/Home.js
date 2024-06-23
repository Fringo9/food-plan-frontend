// src/components/Home.js
import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { getWeeklyPlan } from '../services/api';

const Home = ({ user }) => {
  const [todayPlan, setTodayPlan] = useState(null);
  const [currentMeal, setCurrentMeal] = useState('breakfast');

  useEffect(() => {
    const fetchData = async () => {
      console.log('Fetching weekly plan for user:', user.username);
      const weeklyPlan = await getWeeklyPlan(user.username);
      console.log('Weekly plan retrieved:', weeklyPlan);

      const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
      console.log('Today is:', today);

      const todayPlanData = weeklyPlan.find(day => day.day.toLowerCase() === today.toLowerCase());
      console.log('Today\'s plan data:', todayPlanData);

      if (todayPlanData) {
        setTodayPlan(todayPlanData);
        const meal = getCurrentMeal(todayPlanData);
        console.log('Current meal:', meal);
        setCurrentMeal(meal);
      }
    };

    const getCurrentMeal = (dayPlan) => {
      const now = new Date();
      const hour = now.getHours();
      if (hour >= 22 || hour < 9) return 'breakfast';
      if (hour >= 9 && hour < 11) return 'morningSnack';
      if (hour >= 11 && hour < 14) return 'lunch';
      if (hour >= 14 && hour < 18) return 'afternoonSnack';
      if (hour >= 18 && hour < 22) return 'dinner';
      return 'breakfast'; // Default to breakfast if none match
    };

    fetchData();
  }, [user.username]);

  return (
    <Container maxWidth="md">
      <Box mt={4} mb={2}>
        <Typography variant="h4" gutterBottom>
          Today's Meal Plan
        </Typography>
      </Box>
      {todayPlan && (
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6">{currentMeal.charAt(0).toUpperCase() + currentMeal.slice(1)}</Typography>
          <Typography variant="body1">{todayPlan.meals[currentMeal]}</Typography>
        </Paper>
      )}
    </Container>
  );
};

export default Home;



