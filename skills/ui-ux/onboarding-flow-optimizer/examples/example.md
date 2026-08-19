# Example: Onboarding Flow Optimizer

## Input

> "Our developer platform has an 8-step signup wizard asking for team size, cloud provider, billing address, SSH keys, repo URL, and project name. 65% of users drop off at step 3."

## Output

### Friction Reduction Strategy
1. **Reduce Steps from 8 to 2**:
   - **Step 1**: Connect GitHub (instantly imports name, email, avatar).
   - **Step 2**: Select Repository & Click Deploy.
2. **Deferred Configuration (Post-Aha Moment)**:
   - Move Billing, Team Size, and SSH Keys to project settings *after* the first preview URL is deployed and running.
3. **Instant Value**: Show real-time build logs immediately upon selecting the repository to provide instant dopamine.
