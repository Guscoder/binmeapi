

CREATE TABLE bins (
  id serial PRIMARY KEY,
  bin_endpoint varchar(255) UNIQUE,
  created_at timestamp,
  is_expired boolean
);

CREATE TABLE requests (
  id serial PRIMARY KEY,
  bins_id varchar(20),
  FOREIGN KEY (bins_id) REFERENCES bins(bin_endpoint),
  payload jsonb,
  method text,
  headers jsonb,
  received_at timestamp
);